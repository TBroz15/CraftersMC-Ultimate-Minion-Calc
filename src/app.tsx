import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "./app.css";
import "@fontsource/lexend";
import "@fontsource/red-hat-display";

import {
  ColorModeScript,
  ColorModeProvider,
  cookieStorageManagerSSR,
} from "@kobalte/core";
import { getCookie } from "vinxi/http";
import { isServer } from "solid-js/web";

function getServerCookies() {
  "use server";
  const colorMode = getCookie("kb-color-mode");
  return colorMode ? `kb-color-mode=${colorMode}` : "";
}

export default function App() {
  const storageManager = cookieStorageManagerSSR(
    isServer ? getServerCookies() : document.cookie
  );

  return (
    <Router
      base={import.meta.env.SERVER_BASE_URL}
      root={(props) => (
        <MetaProvider>
          <ColorModeScript
            storageType={storageManager.type}
            initialColorMode="dark"
          />
          <ColorModeProvider storageManager={storageManager}>
            <Title>CraftersMC Ultimate Minion Calculator</Title>
            <div class="bg-gradient-to-tr min-w-screen fixed inset-0 w-full h-full min-h-screen not-dark:from-cyan-100 not-dark:to-white dark:from-cyan-950 dark:to-blue-900"></div>
            <div class="z-10 relative h-full xl:h-screen  xl:rounded-3xl xl:m-4 p-4">
              <Suspense>{props.children}</Suspense>
            </div>
          </ColorModeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
