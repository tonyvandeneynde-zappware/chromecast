/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

/* For the limited multilanguage support, we use a simple and trivial solution. */


const GLOBALTEXT =
    {
        default: 'deu',
        map: {
            'deu': 'german',
            'ger': 'german',
            'eng': 'english',
            'hrv': 'croatian',
            'slv': 'slovenian',
            'bul': 'bulgarian'
        },
        strings: {
            'english': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on TV app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "This program is currently not available because of regional content rights.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR><BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                bitrate: "Bitrate",
                formatNoTime: "--:--",
                formatTime: "HH:mm",
                formatDate: "HH:mm",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "HH:mm:ss",
                formatProgressShort: "\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Forward skipping is not allowed during ad breaks.",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            },
            'german': {
                contentLockedTitle: "PIN eingeben",
                contentLockedDescription: "Inhalt wurde aus Gründen der Altersfreigabe gesperrt<BR>(PIN in der TV-App eingeben)",
                contentBlockedTitle: "",
                contentBlockedDescription: "Diese Sendung ist aufgrund begrenzter regionaler Inhaltsrechte nicht verfügbar.",
                onErrorTitle: "Hoppla!",
                onErrorDescription: "Etwas ist schief gelaufen (code: $CODE$).<BR><BR>Versuchen Sie es bitte erneut.",
                activateAppTitle: "TV-App aktivieren",
                activateAppDescription: "Bitte aktivieren Sie die TV-App auf dem Mobilgerät, um weiterzusehen.",
                bitrate: "Bitrate",
                formatNoTime: "--:--",
                formatTime: "HH:mm",
                formatDate: "HH:mm",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "HH:mm:ss",
                formatProgressShort: "\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Zeitsprünge sind während eines Werbeblocks nicht erlaubt.",
                blockTrickPlayOnChannelLevel: "Vorspulen ist auf diesem Kanal nicht möglich.",
                trickPlayRestrictions: "Vorspulen ist auf diesem Kanal nicht möglich.",
            },
            'croatian': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on TV app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "Odabrani program trenutno nije dostupan zbog regionalnih prava na sadržaj.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR><BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                bitrate: "Bitrate",
                formatNoTime: "--:--",
                formatTime: "HH:mm",
                formatDate: "HH:mm",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "HH:mm:ss",
                formatProgressShort: "\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Forward skipping is not allowed during ad breaks.",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            },
            'slovenian': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on TV app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "Ta program trenutno ni na voljo, ker nimamo ustreznih pravic za predvajanje te oddaje v tej regiji.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR><BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                bitrate: "Bitrate",
                formatNoTime: "--:--",
                formatTime: "HH:mm",
                formatDate: "HH:mm",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "HH:mm:ss",
                formatProgressShort: "\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Forward skipping is not allowed during ad breaks.",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            },
            'bulgarian': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on TV app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "Понастоящем тази програма не е налична поради регионални права за излъчване на съдържание.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR><BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                bitrate: "Bitrate",
                formatNoTime: "--:--",
                formatTime: "HH:mm",
                formatDate: "HH:mm",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "HH:mm:ss",
                formatProgressShort: "\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Forward skipping is not allowed during ad breaks.",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            }
        }
    };


