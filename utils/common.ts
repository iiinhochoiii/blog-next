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
}