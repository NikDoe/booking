import { lazy } from "react";
import Header from "./Header";
import Layout from "./Layout";
import Nav from "./Navigation";

const ListWrapper = lazy(() => import("./ListWrapper"));
const SingleWrapper = lazy(() => import("./SingleWrapper"));

export { Header, Layout, ListWrapper, Nav, SingleWrapper };
