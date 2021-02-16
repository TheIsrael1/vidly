import * as Sentry from "@sentry/react";

function init(){
 Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  maxBreadcrumbs: 50,
  debug: true,
 });

}

function log(error){
 Sentry.captureException(error);
}

export default {
 init,
 log
}