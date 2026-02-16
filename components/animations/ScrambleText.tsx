'use client'

import React, { useState, useEffect, useCallback, memo } from 'react'

interface ScrambleTextProps {
    words: string[]
    className?: string
    scrambleSpeed?: number
    stayDuration?: number
}

// Mixed characters for a sophisticated "decoding" effect
// Combining letters and tech-y symbols
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?'

/**
 * ScrambleText - Premium text decoding animation
 */
const ScrambleText = memo(({
    words,
    className = '',
    scrambleSpeed = 50, // slightly slower for better readability
    stayDuration = 3000 // stay longer
}: ScrambleTextProps) => {
    const [displayText, setDisplayText] = useState(words[0])
    const [isScrambling, setIsScrambling] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)

    const scrambleTo = useCallback((targetWord: string) => {
        setIsScrambling(true)
        let iteration = 0
        let interval: NodeJS.Timeout

        interval = setInterval(() => {
            setDisplayText(prev => {
                return targetWord
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) {
                            return char
                        }
                        // Add some occasional random chars for length variation effect during scramble
                        return characters[Math.floor(Math.random() * characters.length)]
                    })
                    .join('')
            })

            if (iteration >= targetWord.length) {
                clearInterval(interval)
                setIsScrambling(false)
                setDisplayText(targetWord)
            }

            iteration += 1 / 2 // Smoother reveal
        }, scrambleSpeed)

        return () => clearInterval(interval)
    }, [scrambleSpeed])

    useEffect(() => {
        let timeout: NodeJS.Timeout

        if (!isScrambling) {
            timeout = setTimeout(() => {
                const nextIndex = (wordIndex + 1) % words.length
                setWordIndex(nextIndex)
                scrambleTo(words[nextIndex])
            }, stayDuration)
        }

        return () => clearTimeout(timeout)
    }, [wordIndex, isScrambling, words, stayDuration, scrambleTo])

    // Initial scramble
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        scrambleTo(words[0])
    }, [scrambleTo, words])

    return (
        <span className={`font-mono transition-opacity duration-300 ${className}`}>
            {displayText}
        </span>
    )
})

ScrambleText.displayName = 'ScrambleText'

export default ScrambleText
