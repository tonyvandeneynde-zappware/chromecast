/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

/* For the limited multilanguage support, we use a simple and trivial solution. */


const GLOBALTEXT =
    {
        default: 'eng',
        map: {
            'eng': 'english',
            'nld': 'dutch',
            'dut': 'dutch',
            'fre': 'french',
            'fra': 'french',
            'ger': 'german',
            'deu': 'german'
        },
        strings: {
            'english': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on ORANGE app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "This program is not available.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                novaStreamingProhibitedTitle: "Oops!",
                novaStreamingProhibitedDescription: "Casting is not available for this channel.",
                bitrate: "Bitrate",
                ////////////////////////////////////////////////////////////////////////////
                formatNoTime: "",
                formatTime: "HH:mm",
                formatProgressShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDate: "HH:mm",
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0-mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "-HH:mm:ss",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "\tAction not possible\n During the first minute of the recording it is not possible to pause  rewind or fast forward",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            },
            'dutch': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on ORANGE app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "This program is not available.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                novaStreamingProhibitedTitle: "Oops!",
                novaStreamingProhibitedDescription: "Casting is not available for this channel.",
                bitrate: "Bitrate",
                ////////////////////////////////////////////////////////////////////////////
                formatNoTime: "",
                formatTime: "HH:mm",
                formatProgressShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDate: "HH:mm",
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0-mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "-HH:mm:ss",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Action not possible \n During the first minute of the recording it is not possible to pause \n rewind or fast forward",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            },
            'french': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on ORANGE app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "This program is not available.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                novaStreamingProhibitedTitle: "Oops!",
                novaStreamingProhibitedDescription: "Casting is not available for this channel.",
                bitrate: "Bitrate",
                ////////////////////////////////////////////////////////////////////////////
                formatNoTime: "",
                formatTime: "HH:mm",
                formatProgressShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDate: "HH:mm",
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0-mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "-HH:mm:ss",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Action not possible \n During the first minute of the recording it is not possible to pause \n rewind or fast forward",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            },
            'german': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on ORANGE app)",
                contentBlockedTitle: "",
                contentBlockedDescription: "This program is not available.",
                onErrorTitle: "Oops!",
                onErrorDescription: "Something unexpected went wrong (code: $CODE$).<BR>Please try again.",
                activateAppTitle: "Activate TV App",
                activateAppDescription: "Please activate the TV-app to continue watching.",
                novaStreamingProhibitedTitle: "Oops!",
                novaStreamingProhibitedDescription: "Casting is not available for this channel.",
                bitrate: "Bitrate",
                ////////////////////////////////////////////////////////////////////////////
                formatNoTime: "",
                formatTime: "HH:mm",
                formatProgressShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatProgressLong: "HH:mm:ss",
                formatProgressLongAMPM: "h:mm:ss\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDate: "HH:mm",
                formatDurationShort: "\xa0\xa0\xa0\xa0\xa0\xa0\xa0-mm:ss", // Use NO-BREAK SPACE to avoid collapsing space
                formatDurationLong: "-HH:mm:ss",
                formatTimeAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                formatDateAMPM: "h:mm\xa0A", // Use NO-BREAK SPACE to avoid collapsing space
                blockSkipAd: "Action not possible \n During the first minute of the recording it is not possible to pause \n rewind or fast forward",
                blockTrickPlayOnChannelLevel: "Forwarding is not allowed on this channel.",
                trickPlayRestrictions: "Trick play is disabled on this channel.",
            }
        }
    };


