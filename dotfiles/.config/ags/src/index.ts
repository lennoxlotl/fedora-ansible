import { ClockWidget } from "./widgets/Clock"
import { MprisWidget } from "./widgets/MprisWidget"
import { NetworkWidget } from "./widgets/Network"
import { TrayWidget } from "./widgets/Tray"
import { VolumeWidget } from "./widgets/Volume"
import { WindowTitleWidget } from "./widgets/WindowTitle"
import { WorkspaceWidget } from "./widgets/Workspace"

const styleSheet = App.configDir + '/src/style.css'

const Bar = (monitor: number) => Widget.Window({
    name: `ags-bar-${monitor}`,
    className: 'status-bar',
    anchor: ['top', "left", "right"],
    exclusivity: 'exclusive',
    margins: [6, 6, 6, 6],
    monitor: monitor,
    child: Widget.Box(
        {
            spacing: 0,
            vertical: false,
            children: [
                WorkspaceWidget(),
                WindowTitleWidget(),
                // Creates a "space" between left and right elements
                Widget.Box({ hexpand: true, vexpand: true }),
                TrayWidget(),
                MprisWidget(),
                NetworkWidget(),
                VolumeWidget(),
                ClockWidget()
            ]
        }
    ),
})

App.applyCss(styleSheet)
App.config({
    windows: [Bar(0)]
})