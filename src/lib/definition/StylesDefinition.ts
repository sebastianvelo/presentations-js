import { rootStyleId } from "../shared/RootStyle";
import WidgetStyleSheet from "../style/WidgetStyleSheet";

const defineStyles = () => {
    const style = WidgetStyleSheet.getStyleTag(rootStyleId, [
        {
            rules: [
                {
                    selector: 'widget-row',
                    declarations: {
                        display: 'flex'
                    }
                },
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