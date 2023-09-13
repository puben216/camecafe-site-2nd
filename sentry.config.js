import * as Sentry from "@sentry/gatsby"

Sentry.init({
  dsn: "https://d1650b3a8e2d8640a3b7d4b35142f915@o4505830740852736.ingest.sentry.io/4505830742884352",
  integrations: [new Sentry.Replay()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})
