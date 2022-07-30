import { JwtAuthGuard } from "./jwt.guard";
import { LocalAuthGuard } from "./local.guard";

export const Guards = [JwtAuthGuard, LocalAuthGuard];