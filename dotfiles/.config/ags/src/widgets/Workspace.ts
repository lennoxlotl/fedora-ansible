const hyprland = await Service.import('hyprland');

// Contains the text we should display for specific workspaces, for some this is the workspace number, for others an icon
const ICONS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '󰟡',
    '',
    '󰓓'
]

export const WorkspaceWidget = () => Widget.EventBox({
    className: 'rounded-card',
    child: Widget.Box(
        {
            className: 'workspace-container',
            children: Array.from({ length: 10 }, (_, i) => i)
                .map(WorkspaceButton)
        }
    )
});

export const WorkspaceButton = (index: number) => Widget.Button({
    onClicked: () => hyprland.messageAsync(`dispatch workspace ${index + 1}`),
    className: 'workspace-button',
    child: Widget.Label(
        {
            label: `${ICONS[index]}`,
            className: 'workspace-label'
        }
    ).hook(hyprland, (self) => {
        self.toggleClassName('active', hyprland.active.workspace.id === index + 1)
    })
});