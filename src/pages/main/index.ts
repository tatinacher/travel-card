import { contract } from "../../lib/contract";
import * as model from "./model";
import * as page from "./page";

export { Main } from "./page";

contract({ page, model });
