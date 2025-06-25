'use client'
import Aos from 'aos'
import dynamic from 'next/dynamic'
import {Fragment, ReactNode, Suspense, useEffect} from 'react'
import Loader from "@/components/Loader";

const BackToTop = dynamic(() => import('../BackToTop'), {ssr: false})

const AppProvidersWrapper = ({children}: { children: ReactNode }) => {
    useEffect(() => {
        Aos.init()

        const buttons = document.querySelectorAll('.theme-btn1, .learn1_active1, .learn2_active2, .theme-btn2, .btn_theme3, .btn_theme4, .btn_theme5, .btn_theme6, .btn_theme7, .btn_theme8, .btn_theme9, .btn_theme10, .btn_theme11, .btn_theme12');

        const handleMouseMove = (e: any) => {
            const btn = e.currentTarget;
            const {left, top} = btn.getBoundingClientRect();
            const relX = e.clientX - left;
            const relY = e.clientY - top;

            const span = btn.querySelector('span');
            if (span) {
                span.style.top = `${relY}px`;
                span.style.left = `${relX}px`;
            }
        };

        buttons.forEach((btn) => {
            btn.addEventListener('mousemove', handleMouseMove);
        });

        return () => {
            buttons.forEach((btn) => {
                btn.removeEventListener('mousemove', handleMouseMove);
            });
        };

    }, [])

    return (
        <Fragment>
            <Suspense fallback={<Loader/>}>
                {children}
                <BackToTop/>
            </Suspense>
        </Fragment>
    )
}

export default AppProvidersWrapper
