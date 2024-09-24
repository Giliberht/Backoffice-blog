import { createRouter, createWebHistory } from "vue-router";

import FrontOffice from "../views/view/page/FrontOffice.vue";
import BackOffice from "../views/view/page/BackOffice.vue";
import OverView from "../views/view/panel/OverView.vue";
import DashBoard from "../views/view/panel/DashBoard.vue";
import UserPanel from "../views/view/panel/UserPanel.vue";
import BlogPanel from "../views/view/panel/ArticlePanel.vue";
import MessagePanel from "../views/view/panel/MessagePanel.vue";
import DashBoardView from "../views/_components/DashBoardPanel/DashBoardView.vue";
import ImagePanel from "../views/view/panel/ImagePanel.vue";
import DocPanel from "../views/view/panel/DocPanel.vue";
import SupportPanel from "../views/view/panel/SupportPanel.vue";
import SettingsPanel from "../views/view/panel/SettingsPanel.vue";
import UplaodImage from "../views/_components/ImagePanel/UploadImage.vue";
import ImageFeed from "../views/_components/ImagePanel/ImageFeed.vue";
import AllUsers from "../views/_components/UsersPanel/AllUsers.vue";
import UsersAdd from "../views/_components/UsersPanel/UsersAdd.vue";
import UsersRole from "../views/_components/UsersPanel/UsersRole.vue";
import UserProfile from "@/views/_components/UsersPanel/UserProfile.vue";
import EditUser from "@/views/_components/UsersPanel/EditUser.vue";
import AllArticle from "@/views/_components/ArticlePanel/AllArticle.vue";
import ArticleCom from "@/views/_components/ArticlePanel/AllComments.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: FrontOffice,
  },
  {
    name: "backoffice",
    path: "/backoffice",
    component: BackOffice,
    children: [
      {
        name: "overview",
        path: "/backoffice",
        component: OverView,
      },
      {
        name: "dashboard",
        path: "/backoffice/dashboard",
        component: DashBoard,
        children: [
          {
            name: "dashboardview",
            path: "/backoffice/dashboard-view",
            component: DashBoardView,
          },
        ],
      },
      {
        name: "users",
        path: "/backoffice/users-all",
        component: UserPanel,
        children: [
          {
            name: "usersall",
            path: "/backoffice/users-all",
            component: AllUsers,
          },
          {
            name: "usersadd",
            path: "/backoffice/users-add",
            component: UsersAdd,
          },
          {
            name: "usersrole",
            path: "/backoffice/users-role",
            component: UsersRole,
          },
          {
            path: "/backoffice/user/:id",
            name: "UserProfile",
            component: UserProfile,
            props: true,
          },
          {
            path: "/backoffice/user/edit/:id",
            name: "EditUser",
            component: EditUser,
            props: true,
          },
        ],
      },
      {
        name: "article",
        path: "/backoffice/article-all",
        component: BlogPanel,
        children: [
          {
            name: "articleall",
            path: "/backoffice/article-all",
            component: AllArticle,
          },
          {
            name: "articlecomments",
            path: "/backoffice/article-comments",
            component: ArticleCom,
          },
        ],
      },
      {
        name: "message",
        path: "/backoffice/messages",
        component: MessagePanel,
      },
      {
        name: "images",
        path: "/backoffice/images",
        component: ImagePanel,
        children: [
          {
            name: "uplaodimages",
            path: "/backoffice/images-upload",
            component: UplaodImage,
          },
          {
            name: "feedimages",
            path: "/backoffice/images-all",
            component: ImageFeed,
          },
        ],
      },
      {
        name: "documents",
        path: "/backoffice/documents",
        component: DocPanel,
      },
      {
        name: "support",
        path: "/backoffice/support",
        component: SupportPanel,
      },
      {
        name: "settings",
        path: "/backoffice/settings",
        component: SettingsPanel,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
