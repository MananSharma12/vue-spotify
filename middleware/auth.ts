import { useModalStore } from "~/stores/modal";

export default defineNuxtRouteMiddleware(async (to) => {
    const user = await getCurrentUser()

    if (!user && to.path.startsWith('/manage')) {
        return navigateTo('/');
    }
})