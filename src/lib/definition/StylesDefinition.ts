import WidgetStyleSheet from "../style/WidgetStyleSheet";

const defineStyles = () => {
    const style = WidgetStyleSheet.getStyleTag("root-style", [
        {
            rules: [
                {
                    selector: 'widget-presentation',
                    declarations: {
                        display: 'flex',
                        overflow: 'hidden',
                    }
                },
                {
                    selector: 'widget-slide',
                    declarations: {
                        display: 'none',
                        position: 'relative',
                        flexDirection: 'column',
                    }
                },
                {
                    selector: 'widget-slide[active]',
                    declarations: {
                        display: 'flex',
                    }
                },
            ],
        }
    ]);

    document.head.appendChild(style);
}

export default defineStyles;