import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsViews from "@/views/JobsViews.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsViews,
    },
    {
      path: '/jobs/:id',
      name: 'job',
      component: JobView
    },
    {
      path: '/jobs/add',
      name: 'add-job',
      component: AddJobView
    },
    {
      path: '/jobs/edit/:id',
      name: 'edit-job',
      component: EditJobView
    },
    {
      path: "/:catchAll(.*)",
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

export default router;
