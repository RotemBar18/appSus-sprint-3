import { utilService } from '../../../services/util-service.js'
// import { storageService } from './storage-service.js'

export const mailsService = {
    query,
    toggleMailShow,
    addMail,
    removeMail,
    getMailDetails,
    sendNoteToMail,
    toggleIsRead,
}

const KEY = 'mails';
var gMails = [{
        id: utilService.makeId(),
        title: 'Only 2 spots left for HilaTeam party today - Save your spot!',
        subtitle: "",
        body: 'is only 2 days away! The list is filling up fast so register now to save your spot! You’ll come out of this fun night with: Hila, See you there!',
        sendTo: "me",
        sendfrom: "Noa",
        sentAt: "09/05/21",
        isRead: true,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: true,
        isSendMail: true,
        isInbox: true,
        isStarred: true,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    },
    {
        id: utilService.makeId(),
        title: 'Your automatic payment is approaching',
        subtitle: "",
        body: 'Hi John,Over 40 former Weeknight Chef members took advantage of our special rejoin offer last week and we hope you’ll be next! Sign back up today and get your first month plus three dessert kits FREE! Don’t delay - the offer is only valid for the first 100 returning members or until March 31 - whichever comes first. Click below to reunite with your inner chef today! May your dinnertime dread be gone, The Weeknight Chef Team Weeknight Chef 555-345-678  info@weeknightchef.com Weeknightchef com',
        sendTo: "me",
        sendfrom: "Tuli",
        sentAt: "05/05/21",
        isRead: true,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: false,
        isSendMail: true,
        isInbox: true,
        isStarred: false,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    },
    {
        id: utilService.makeId(),
        title: 'Only 2 spots left for HilaTeam party today - Save your spot!',
        subtitle: "",
        body: 'Hi John, Thank you for shopping at [my business]. Is there anything we can do to improve your experience with us? [Click here to take a 2-minute survey (hyperlink to survey)] Your feedback helps us to help you! We so appreciate it.',
        sendTo: "me",
        sendfrom: "Rotem",
        sentAt: "10/05/21",
        isRead: false,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: false,
        isSendMail: false,
        isInbox: true,
        isStarred: false,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    },
    {
        id: utilService.makeId(),
        title: 'You’re invited! to HilaTeam party at Hilas house - today',
        subtitle: "",
        body: 'It’s time to start celebrate. This event is 100% free, but spots are limited - so sign up now! Hope to see you soon!',
        sendTo: "me",
        sendfrom: "Chen",
        sentAt: "09/05/21",
        isRead: false,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: true,
        isSendMail: true,
        isInbox: true,
        isStarred: true,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    },
    {
        id: utilService.makeId(),
        title: 'Hello there John!',
        subtitle: "",
        body: 'Just a friendly reminder that the next payment for your account ending in 6658 is scheduled for automatic withdrawal from your bank account on 11/05/21 Amount to be withdrawn: 15/05/21 No action is needed on your part, we are just keeping you in the loop! Thanks for choosing HilaTeamRole. Sincerely Noa and Rotem',
        sendTo: "me",
        sendfrom: "Noa",
        sentAt: "04/05/21",
        isRead: false,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: false,
        isSendMail: false,
        isInbox: true,
        isStarred: false,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    },
    {
        id: utilService.makeId(),
        title: 'Headache? Rejoin HilaTeamRole and SAVE BIG!',
        subtitle: "",
        body: 'Hi John Over 40 former Weeknight Chef members took advantage of our special rejoin offer last week and we hope you’ll be next! Sign back up today and get your first month plus three dessert kits FREE! Don’t delay - the offer is only valid for the first 100 returning members or until March 31 - whichever comes first. Click below to reunite with your inner chef today! May your dinnertime dread be gone, The Weeknight Chef Team Weeknight Chef 555-345-678  info@weeknightchef.com Weeknightchef com',
        sendTo: "me",
        sendfrom: "Hila",
        sentAt: "05/05/21",
        isRead: false,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: false,
        isSendMail: false,
        isInbox: true,
        isStarred: false,
        isMailHasVideo: false,
        imgUrl: null,
        videoSrc: null,
        isMailHasImg: false,
    },
    {
        id: utilService.makeId(),
        title: 'Thank you for choosing HilaTeamRole!',
        subtitle: "",
        body: 'Hi John We just want to take the opportunity to thank you for choosing HilaTeamRole as your provider of [product(s) or service(s) you provide]. We are proud of our satisfied clientele and look forward to many years of working together. You’ll be getting an email soon from your account representative, but if you have any questions in the meantime, you can respond to this email or call us at 555-345-678. Thank you for your business. The HilaTeamRole Team',
        sendTo: "me",
        sendfrom: "Rotem",
        sentAt: "09/05/21",
        isRead: true,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: false,
        isSendMail: false,
        isInbox: true,
        isStarred: false,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    },
]

function query(filterBy, filterByProperty) {
    var filteredMails = gMails;
    filteredMails = filteredMails.filter(mail => {
        return mail[filterByProperty]
    })
    if (filterBy) {
        var { text } = filterBy
        filteredMails = filteredMails.filter(mail => {
            return (mail.title.toLowerCase().includes(text.toLowerCase()) || mail.body.toLowerCase().includes(text.toLowerCase()))
        })
        return Promise.resolve(filteredMails)
    }
    return Promise.resolve(filteredMails)
}

function toggleMailShow(mailId) {
    var idx = gMails.findIndex(mail => mail.id === mailId)
    gMails[idx]['isOpen'] = !gMails[idx]['isOpen']
    return Promise.resolve(gMails)
}

function addMail({ body, sendTo, title }, isDraft, isSendMail) {
    if (sendTo.length) sendTo = sendTo.join('>  <')
    gMails.unshift({
        id: utilService.makeId(),
        title,
        subtitle: "",
        body,
        sendTo,
        sendfrom: "Me",
        sentAt: "09/05/21",
        isRead: true,
        isOpen: false,
        mailAddress: `<${sendTo}>`,
        isDraft,
        isSendMail,
        isInbox: false,
        isStarred: false,
        isMailHasVideo: false,
        isMailHasImg: false,
        imgUrl: null,
        videoSrc: null,
    }, )
    return Promise.resolve(gMails)
}

function removeMail(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId)
    gMails.splice(idx, 1);
    return Promise.resolve(gMails)
}

function getMailDetails(mailId) {
    const mail = gMails.find(mail => mail.id === mailId)
    return Promise.resolve(mail)
}

function sendNoteToMail(note) {
    var mail = {
        body: '',
        sendTo: ['Enter address'],
        title: 'Note',
    }
    if (note.type === 'NoteText') {
        mail.body = note.info.txt;
    } else if (note.type === 'NoteTodos') {
        var txt = note.info.todos.map(todo => {
            var str = `▪ ${todo.txt}`
            str += (todo.doneAt) = ': done!.'
            return str;
        }).join()
        mail.body = txt;
    } else if (note.type === 'NoteImg') {
        return _addMailFromImgNote(note)
    } else if (note.type === 'NoteVideo') {
        return _addMailFromVideoNote(note);
    }
    addMail(mail, true, false)
}

function _addMailFromImgNote(note) {
    const mail = {
        id: utilService.makeId(),
        title: 'Img note',
        subtitle: "",
        body: note.info.title,
        sendTo: "me",
        sendfrom: "me",
        sentAt: "09/05/21",
        isRead: false,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: true,
        isSendMail: false,
        isInbox: false,
        isStarred: false,
        isMailHasVideo: false,
        imgUrl: note.info.url,
        videoSrc: null,
        isMailHasImg: true,
    }
    gMails.unshift(mail);
}

function _addMailFromVideoNote(note) {
    const mail = {
        id: utilService.makeId(),
        title: 'Video note',
        subtitle: "",
        body: '',
        sendTo: "me",
        sendfrom: "me",
        sentAt: "09/05/21",
        isRead: false,
        isOpen: false,
        mailAddress: `<abaJufi@gMails.com>`,
        isDraft: true,
        isSendMail: false,
        isInbox: false,
        isStarred: false,
        isMailHasVideo: true,
        imgUrl: null,
        videoSrc: note.info.videoId,
        isMailHasImg: false,
    }
    gMails.unshift(mail);
}

function toggleIsRead(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId)
    gMails[idx].isRead = !gMails[idx].isRead;
    return Promise.resolve(gMails);
}