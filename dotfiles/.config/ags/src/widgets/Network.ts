const network = await Service.import("network");

const status = {
    connected: "Connected",
    connecting: "Connecting",
    disconnected: "Disconnected"
}

export const NetworkWidget = () => Widget.Box({
    className: 'rounded-card container space',
    spacing: 12,
    children: [
        Widget.Label(
            {
                className: 'active',
                label: "󰛳"
            }
        ),
        Widget.Label().bind('label', network.wired, "internet", (net) => status[net])
    ]
})