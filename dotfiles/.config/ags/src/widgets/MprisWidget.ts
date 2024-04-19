import Gtk from "types/@girs/gtk-3.0/gtk-3.0";
import Box from "types/widgets/box";

const mpris = await Service.import('mpris');

export const MprisWidget = () => {
    function playerChangedHook(self: Box<Gtk.Widget, unknown>) {
        const primaryPlayer = mpris.players
            .find((player) => {
                return player.name === 'spotify'
            }) ?? mpris.players[0];
        // Neither spotify or fallback player available
        if (!primaryPlayer) {
            return;
        }

        let playerIcon: String;
        if (primaryPlayer.name == 'spotify') {
            playerIcon = "";
        } else {
            playerIcon = ""
        }

        self.child = Widget.Box(
            {
                className: 'rounded-card space container',
                spacing: 12,
                children: [
                    Widget.Label(
                        {
                            className: 'active',
                            label: `${playerIcon}`
                        }
                    ),
                    Widget.Label().bind(
                        'label',
                        primaryPlayer,
                        'track_title',
                        (value) => {
                            // Limits the size of the song title
                            if (value.length < 30) {
                                return value;
                            }
                            return value.substring(0, 30).trim() + "...";
                        }
                    )
                ]
            }
        )
    }

    return Widget.Box(
        {
            setup: (self) => {
                playerChangedHook(self);
                self.hook(mpris, playerChangedHook, 'player-added');
                self.hook(mpris, playerChangedHook, 'player-closed');
            }
        }
    );
}