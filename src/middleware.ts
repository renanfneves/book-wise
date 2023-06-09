import { stackMiddlewares } from "@/libs/middlewares/stackMiddlewares";
import { withErrorHandler } from "@/libs/middlewares/withErrorHandler";
import { withLogging } from "@/libs/middlewares/withLogging";

export default stackMiddlewares([withErrorHandler, withLogging]);