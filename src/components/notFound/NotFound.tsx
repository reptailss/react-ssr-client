import React from 'react'
import { Link } from '@components/link/Link'

const styles: Record<string, React.CSSProperties> = {
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 16px',
        minHeight: '70vh',
        backgroundColor: '#f8f9fa',
    },
    card: {
        textAlign: 'center',
        backgroundColor: 'white',
        padding: 40,
        borderRadius: 16,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        maxWidth: 500,
        width: '100%',
    },
    code: {
        fontSize: 96,
        fontWeight: 'bold',
        margin: 0,
        color: '#ff6b6b',
    },
    title: {
        fontSize: 24,
        fontWeight: 600,
        margin: '16px 0',
        color: '#343a40',
    },
    description: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 32,
    },
    link: {
        display: 'inline-block',
        padding: '12px 24px',
        backgroundColor: '#228be6',
        color: 'white',
        borderRadius: 8,
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'background-color 0.2s ease',
    },
}

export const NotFound = () => {
    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <h1 style={styles.code}>404</h1>
                <h2 style={styles.title}>Сторінку не знайдено</h2>
                <p style={styles.description}>
                    Схоже, ви потрапили не туди. Можливо, сторінку було переміщено або видалено.
                </p>
                <Link href="/" style={styles.link}>
                    ⬅ Повернутись на головну
                </Link>
            </div>
        </div>
    )
}


