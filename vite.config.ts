import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import {cjsInterop} from "vite-plugin-cjs-interop";
import {UserConfig} from 'vite'

export default {
  plugins: [
    react(), vike(),
    cjsInterop({
      // List of CJS dependencies that require interop
      dependencies: [
        "react-image-gallery",
      ],
    }),
  ],
  /* Doesn't work:
  ssr: {
    noExternal: [
         "react-image-gallery",
    ],
    // https://github.com/vitejs/vite/issues/14158#issuecomment-1685033558
    optimizeDeps: {
      include: [
           "react-image-gallery",
      ]
    }
  }
  */
} satisfies UserConfig;
