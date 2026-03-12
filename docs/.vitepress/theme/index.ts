import { h, nextTick, watch } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { createMermaidRenderer } from "vitepress-mermaid-renderer";
import { Button } from './components/ui/button'
import ImageViewerP from '@davidingplus/vitepress-image-viewer'
import '@davidingplus/vitepress-image-viewer/style.css'
import './style.css'
export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
    app.component('ButtonVue', Button),
    ImageViewerP(app)
  },
    Layout: () => {
        const { isDark } = useData();

        const initMermaid = () => {
            const mermaidRenderer = createMermaidRenderer({
                theme: isDark.value ? "dark" : "forest",
            });
        };

        // initial mermaid setup
        nextTick(() => initMermaid());

        // on theme change, re-render mermaid charts
        watch(
            () => isDark.value,
            () => {
                initMermaid();
            },
        );

        return h(DefaultTheme.Layout);
    },
} satisfies Theme;