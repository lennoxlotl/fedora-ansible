const hyprland = await Service.import('hyprland');

export const WindowTitleWidget = () => Widget.Box(
    {
        className: 'rounded-card container space-left',
        child: Widget.Label().bind(
            'label',
            hyprland.active.client,
            'title',
            (value) => {
                // Validate window title
                if (value == null || value.length == 0) {
                    return '~';
                }

                // Truncate window title
                if (value.length <= 64) {
                    return value;
                }
                return value.substring(0, 64).trim() + "...";
            }
        )
    }
)