---
title: Фильтрация обработанных исключений из логов Sentry
description: Как исключить регистрацию уже обработанных исключений в Sentry.
published: true
date: 2024-01-10
cover: sentry-filter-handled-exceptions.png
tags:
  - Sentry
  - Python
  - Django
  - DevOps
  - TIL
---

# Фильтрация обработанных исключений из логов Sentry

<a href="https://sentry.io/">Sentry</a> – отличный инструмент для оперативного выявления ошибок в задеплоеном на сервере приложении. Он поддерживает множество языков программирования и фреймворков, имеет бесплатный и платные <a href="https://sentry.io/pricing/">тарифы</a>, а также может быть <a href="https://timeweb.cloud/tutorials/servers/sentry-monitoring-i-otslezhivanie-oshibok#ustanovka-self-hosted-versii">развернут самостоятельно</a>. Однако, при отладке своего нового проекта <a href="https://rss.hazadus.ru/">RSS Reader</a> я столкнулся с тем, что обработанные в коде исключения регистрируются как события (Issues) в логах Sentry, что для меня оказалось нежелательным поведением. Кроме того, что эти события сбивают с толку, они ещё и расходуют ограниченную квоту в бесплатном тарифе.

Обратите внимание на тэги `handled: yes` и  `logger: ...` на скриншоте:

![Screenshot 1](/images/blog/sentry-filter-handled-exceptions-screen-1.png)

Это означает, что "ошибка" сгенерирована логгером и уже обработана в коде, который в моём случае выглядит вот так:

```python
try:
  response = requests.get(url, timeout=5.0)
except Exception as exc:
  logger.exception(f"Failed to get content from {url}", exc_info=exc)
  raise CantGetPageInfoFromURL
```

Как следует из <a href="https://docs.sentry.io/platforms/python/configuration/filtering/#using-platformidentifier-namebefore-send-">документации Sentry SDK</a>, перед непосредственной отправкой данных о событии на сервер, вызывается callback-функция, переданная в качестве параметра `before_send` при инициализации Sentry SDK в проекте.

Ниже приведён пример реализации такой функции, которая отфильтрует все "ошибки", сгенерированные логгером и обработанные исключения:

```python
if SENTRY_DSN := env.str("SENTRY_DSN", None):
  import sentry_sdk  
  
  def before_send(event: dict, hint: dict) -> dict | None:  
    # Фильтруем ошибки, зарегистрированные логгером
    if "logger" in event:  
      return None  

    # Фильтруем обработанные в коде исключения
    if exceptions := event.get("exception", {}).get("values", []):
      if exceptions[-1].get("mechanism", {}).get("handled"):
        return None

    return event  

  sentry_sdk.init(  
      dsn=SENTRY_DSN,  
      traces_sample_rate=0.5,  
      before_send=before_send,  
  )
```

Параметр `event` функции `before_send` содержит подробнейшую информацию о произошедшем событии (см. ссылки на документацию в конце поста), так что при необходимости можно настроить ещё более тонкую фильтрацию передаваемых на сервер событий, или даже модифицировать данные перед их передачей.

Надеюсь, это решение поможет и вам использовать Sentry в своём проекте оптимальным образом!

## Справочные материалы
- Документация Sentry SDK для Python:
  - [Использование `before_send`](https://docs.sentry.io/platforms/python/configuration/filtering/#using-platformidentifier-namebefore-send-).
  - [Доступные поля в словаре `event`](https://develop.sentry.dev/sdk/event-payloads/).
    - [Exception Interface](https://develop.sentry.dev/sdk/event-payloads/exception/)
  - [Интеграция Sentry с Django](https://docs.sentry.io/platforms/python/integrations/django/).
- [Sentry: мониторинг и отслеживание ошибок](https://timeweb.cloud/tutorials/servers/sentry-monitoring-i-otslezhivanie-oshibok) – хороший пост с разделом про деплой self-hosted варианта Sentry.