import message from '/src/pages/Profile/message.png'
import feedback from '/src/pages/Profile/feedback.png'
import gallery from '/src/pages/Profile/gallery.png'
import settings from '/src/pages/Profile/settings.png'
import service from '/src/pages/Profile/service.png'

type TypeProfile = {
    name: string;
    icon: any;
    page: string;
}

const messagesPage: TypeProfile = {
    name: "Сообщения",
    icon: message,
    page: "/chats"
}

const feedbacksPage: TypeProfile = {
    name: "Отзывы",
    icon: feedback,
    page: "/feedbacks"
}

const servicesPage: TypeProfile = {
    name: "Услуги",
    icon: service,
    page: "/services"
}

const galleryPage: TypeProfile = {
    name: "Галерея",
    icon: gallery,
    page: "/gallery"
}

const settingsPage: TypeProfile = {
    name: "Настройки",
    icon: settings,
    page: "/settings"
}

export const profileMap = [
        messagesPage,
        feedbacksPage,
        servicesPage,
        galleryPage,
        settingsPage
]