/** @license (c) 2017-2019 by Zappware.
 * All Rights Reserved. No part of this application or any of its contents may be
 * reproduced, copied, modified or adapted, without the prior written consent of
 * Zappware.
 **/

/* For the limited multilanguage support, we use a simple and trivial solution. */


const GLOBALTEXT =
    {
        default: 'eng',
        map: { 'gre': 'greek', 'ell': 'greek', 'eng': 'english'},
        strings: {
            'english': {
                contentLockedTitle: "Enter PIN",
                contentLockedDescription: "Content locked for parental rating reasons<BR>(enter PIN on WIND VISION app)",
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
                blockSkipAd: "Forward skipping is not allowed during ad breaks."
            },
            'greek': {
                contentLockedTitle: "Εισαγωγή PIN",
                contentLockedDescription: "Μη επιτρεπτή θέαση λόγω γονικού ελέγχου<BR>(εισαγωγή PIN στην εφαρμογή WIND VISION)",
                contentBlockedTitle: "",
                contentBlockedDescription: "Το πρόγραμμα δεν είναι διαθέσιμο.",
                onErrorTitle: "Ουπς!",
                onErrorDescription: "Προσωρινό πρόβλημα(κωδικός: $CODE$).<BR>Προσπάθησε ξανά.",
                activateAppTitle: "Ενεργοποιήστε την εφαρμογή WIND VISION",
                activateAppDescription: "Ενεργοποιήστε την εφαρμογή τηλεόρασης στην κινητή συσκευή για να συνεχίσετε να παρακολουθείτε.",
                novaStreamingProhibitedTitle: "Ουπς!",
                novaStreamingProhibitedDescription: "Η μετάδοση μέσω cast δεν είναι διαθέσιμη σε αυτό το κανάλι.",
                bitrate: "Ταχύτητα",
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
                blockSkipAd: "Forward skipping is not allowed during ad breaks."
            }
        }
    };


