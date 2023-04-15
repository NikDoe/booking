import { lazy } from "react";
import Header from "./Header";
import Layout from "./Layout";
import Nav from "./Navigation";
import Footer from "./Footer";

const ListWrapper = lazy(() => import("./ListWrapper"));
const SingleWrapper = lazy(() => import("./SingleWrapper"));

export { Footer, Header, Layout, ListWrapper, Nav, SingleWrapper };
