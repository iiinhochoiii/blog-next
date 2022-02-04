import { toast } from 'react-toastify';

export class Toaster {
    static showSuccess = (message: string) => {
        toast(message, {
            type: 'success',
            theme: 'colored'
        })
    }

    static showError = (message: string) => {
        toast(message, {
            type: 'error',
            theme: 'colored'
        })
    }

    static showWarning = (message: string) => {
        toast(message, {
            type: 'warning',
            theme: 'colored'
        })
    }
}