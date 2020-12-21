import { ErrorState } from "./error-state.interface";
import { LoadingState } from "./loading-state.enum";

export type CallState = LoadingState | ErrorState;

// Helper function to extract error, if there is one.
export function getError(callState: CallState): string | null {
    if ((callState as ErrorState).errorMsg !== undefined) {
        return (callState as ErrorState).errorMsg;
    }
    return null;
}