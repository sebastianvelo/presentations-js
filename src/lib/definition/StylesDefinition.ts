import { rootStyleId } from "../shared/RootStyle";
import WidgetStyleSheet from "../style/WidgetStyleSheet";

const defineStyles = () => {
    const style = WidgetStyleSheet.getStyleTag(rootStyleId, [
        {
            rules: [
                {
                    selector: 'w-row',
                    declarations: {
                        display: 'flex'
                    }
                },
                {
                    selector: 'w-presentation',
                    declarations: {
                        display: 'flex',
                        overflow: 'hidden',
                    }
                },
                {
                    selector: 'w-presentation-body',
                    declarations: {
                        width: '100%',
                        height: '100%',
                    }
                },
                {
                    selector: 'w-slide',
                    declarations: {
                        display: 'none',
                        position: 'relative',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                    }
                },
                {
                    selector: 'w-slide[active]',
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