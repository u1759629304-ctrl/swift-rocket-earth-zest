import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import appCss from "../styles.css?url";

const APP_NAME = "Map Studio Pro";

const MOUNT_STUDIO = `(function(){if(document.getElementById("map-studio-root"))return;var d=document.createElement("div");d.id="map-studio-root";d.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:1";document.body.appendChild(d);})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#0e0e10" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: "/map-studio.css" },
      { rel: "modulepreload", href: "/map-studio.js" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    scripts: [{ src: "/map-studio.js", type: "module" }],
  }),
  component: () => (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Keep this bridge — lets the Grok preview chrome drive the app; noops when not embedded. */}
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
        <script dangerouslySetInnerHTML={{ __html: MOUNT_STUDIO }} />
      </body>
    </html>
  ),
});
