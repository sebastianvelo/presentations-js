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
                    }
                },
                {
                    selector: 'w-presentation-body',
                    declarations: {
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        display: 'inline-block'
                    }
                },
                {
                    selector: 'w-control button:focus',
                    declarations: {
                        outline: 'none',
                    }
                },
                {
                    selector: 'w-slide',
                    declarations: {
                        display: 'flex',
                        position: 'relative',
                        flexDirection: 'column',
                    }
                },
            ],
            keyframes: [
                {
                    name: 'slide-left',
                    steps: [
                        {
                            selector: "from",
                            declarations: {
                                left: '100%'
                            }
                        },
                        {
                            selector: "to",
                            declarations: {
                                left: '0'
                            }
                        },
                    ]
                },
                {
                    name: 'slide-top',
                    steps: [
                        {
                            selector: "from",
                            declarations: {
                                top: '100%'
                            }
                        },
                        {
                            selector: "to",
                            declarations: {
                                top: '0'
                            }
                        },
                    ]
                }
            ]
        },
    ]);

    document.head.appendChild(style);
}

export default defineStyles;