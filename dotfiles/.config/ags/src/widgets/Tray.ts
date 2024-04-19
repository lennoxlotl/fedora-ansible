import { TrayItem } from "types/service/systemtray";

const tray = await Service.import('systemtray');

const TrayWidgetButton = (item: TrayItem) => {
    return Widget.Button(
        {
            onPrimaryClick: (_, event) => item.activate(event),
            onSecondaryClick: (_, event) => item.openMenu(event),
            className: 'transparent',
            child: Widget.Icon().bind('icon', item, 'icon')
        }
    )
}

export const TrayWidget = () => Widget.Box({
    className: 'rounded-card space',
    child: Widget.Box(
        {
            spacing: 2
        }
    ).bind(
        'children',
        tray,
        'items',
        (item) => item.map(TrayWidgetButton)
    )
});