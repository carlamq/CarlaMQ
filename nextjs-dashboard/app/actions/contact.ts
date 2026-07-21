'use server'

import clientPromise from '@/lib/mongodb'

export interface ContactFormState {
    success: boolean
    error: string | null
}

export async function sendMessage(
    _prevState: ContactFormState,
    formData: FormData
): Promise<ContactFormState> {
    const name = formData.get('name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!name || !email || !message) {
        return {
            success: false,
            error: 'Please fill in all fields.',
        }
    }   

    try {
        const client = await clientPromise
        const db = client.db('portfolio')
        await db.collection('messages').insertOne({
            name,
            email,
            message,
            createdAt: new Date(),
        })   
        return { success: true, error: null }
    } catch (error) {
        console.error(error)
        return {
            success: false,
            error: 'An error occurred while sending the message.',
        }   
    }
}

// La firma (prevState, formData) es un formato específico que exige el hook useActionState de React (lo usamos en el siguiente paso) —
// el primer parámetro es el resultado del envío anterior, el segundo son los datos del formulario que se acaba de enviar

// 