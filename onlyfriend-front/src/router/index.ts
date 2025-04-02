import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import FriendsPage from '@/views/FriendsPage.vue'
import ChatPage from '@/views/ChatPage.vue'
import ProfilePage from '@/views/ProfilePage.vue'
import SuggestionsPage from '@/views/SuggestionsPage.vue'
import ConversationPage from '@/views/ConversationPage.vue'

const routes = [
  { path: '/', redirect: '/friends' },
  { path: '/login', component: LoginPage, name: 'Login' },
  { path: '/friends', component: FriendsPage, name: 'Friends' },
  { path: '/conversations', component: ConversationPage, name: 'Conversation' },
  { path: '/chat/:friendId', component: ChatPage, name: 'Chat', props: true },
  { path: '/profile', component: ProfilePage, name: 'Profile' },
  { path: '/suggestions', component: SuggestionsPage, name: 'Suggestions' },
  { path: '/:pathMatch(.*)*', redirect: '/friends' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
