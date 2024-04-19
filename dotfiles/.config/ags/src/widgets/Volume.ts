import { Application } from "types/service/applications";

const audio = await Service.import('audio');
const applications = await Service.import('applications');

export const VolumeWidget = () => Widget.Box(
    {
        className: 'rounded-card container space',
        children: [
            Widget.Button(
                {
                    onClicked: () => {
                        const queryResult: Application[] = applications.query('pavucontrol');
                        // pavucontrol is not installed
                        if (queryResult.length < 1) {
                            return;
                        }
                        queryResult[0].launch()
                    },
                    className: 'transparent',
                    css: 'padding: 0',
                    child: Widget.Box(
                        {
                            spacing: 12,
                            children: [
                                Widget.Label(
                                    {
                                        className: 'active',
                                        label: ''
                                    }
                                ),
                                Widget.Label().bind(
                                    'label',
                                    audio.speaker,
                                    'volume',
                                    (v) => `${Math.trunc(v * 100)}%`
                                )
                            ]
                        }
                    )
                }
            )
        ]
    }
);