const timeVariable = Variable<Date>(
    new Date(),
    {
        poll: [
            1000,
            'date',
            (o) => new Date()
        ]
    }
)

export const time = Utils.derive([timeVariable], (time) => {
    return time.toLocaleDateString(
        undefined,
        {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }
    )
})

export const ClockWidget = () => Widget.Box({
    className: "rounded-card container",
    spacing: 12,
    children: [
        Widget.Label({
            className: 'active',
            label: '󰥔'
        }),
        Widget.Label({
            label: time.bind()
        })
    ]
})