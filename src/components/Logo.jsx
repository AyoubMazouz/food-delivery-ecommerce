import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="177"
            height="68"
            fill="none"
            onClick={() => navigate("/")}
            className="lg:scale-[1.3] cursor-pointer lg:hover:scale-[1.33] transition-all duration-300"
        >
            <path
                fill="#333"
                d="M53.37 28.98h5.58c2.2 0 3.83.5 4.9 1.5 1.05.98 1.58 2.5 1.58 4.6 0 3.1-1.16 4.8-3.48 5.12 1.44.34 2.5 1.02 3.15 2.04.66 1 1 2.37 1 4.1 0 2.2-.53 3.9-1.57 5.1-1.02 1.23-2.58 1.84-4.68 1.84h-6.48v-24.3zm5.4 10.14c1.4 0 2.37-.3 2.9-.9.55-.62.82-1.67.82-3.15 0-1.08-.18-1.87-.52-2.37-.32-.52-.8-.85-1.47-1-.65-.13-1.63-.2-2.93-.2h-.8v7.62h2zm.27 11.73c1 0 1.77-.15 2.3-.45.57-.32.96-.8 1.18-1.44.22-.64.33-1.5.33-2.6 0-1.57-.32-2.73-.96-3.5-.65-.77-1.7-1.16-3.13-1.16h-2v9.15h2.27zm19.33 2.7c-1.7 0-3.03-.34-4-1.02-.93-.68-1.58-1.63-1.94-2.85-.36-1.22-.54-2.75-.54-4.6V29h3.23v16.26c0 1.84.2 3.24.63 4.2.44.96 1.3 1.44 2.6 1.44s2.17-.48 2.6-1.44c.43-.96.65-2.36.65-4.2V28.98h3.22v16.1c0 1.85-.18 3.38-.54 4.6-.36 1.22-1 2.17-1.95 2.85-.94.68-2.26 1.02-3.96 1.02zM91.4 28.98h4.88c2.46 0 4.26.5 5.4 1.53 1.16 1 1.74 2.65 1.74 4.93 0 3.12-1 5-3 5.67l3.45 12.18h-3.27l-3.18-11.4h-2.64v11.4h-3.4v-24.3zm4.67 10.47c1.46 0 2.5-.3 3.12-.87.63-.58.95-1.63.95-3.15 0-1-.1-1.78-.33-2.34-.22-.6-.6-1-1.17-1.27-.56-.28-1.35-.42-2.37-.42h-1.5v8.05h1.3zm19.66 14.13c-2.2 0-3.8-.7-4.77-2.07-.98-1.4-1.47-3.46-1.47-6.2v-8.13c0-1.88.18-3.42.56-4.62.4-1.22 1.07-2.15 2-2.8.97-.65 2.28-.98 3.94-.98 2.24 0 3.85.57 4.83 1.7 1 1.15 1.5 2.94 1.5 5.38v.9h-3.18V36c0-1.16-.07-2.05-.2-2.67-.15-.64-.45-1.12-.9-1.44-.45-.33-1.1-.5-2-.5-.93 0-1.63.23-2.1.67-.45.42-.75 1-.9 1.7-.1.73-.17 1.7-.17 2.9v9c0 1.85.22 3.2.66 4 .46.8 1.33 1.2 2.6 1.2s2.13-.43 2.6-1.3c.47-.9.7-2.3.7-4.24v-1.68h-3.08v-2.4h6.15v12.03h-2.12l-.33-2.8c-.76 2.07-2.2 3.1-4.32 3.1zM129 28.98h9.42v2.52h-6.03v8.04h4.88v2.4h-4.9v8.9h6.1v2.44H129v-24.3zm15.22 0h3.38v21.87h6.22v2.43h-9.6v-24.3zm20.92 24.57c-2.38 0-4.1-.67-5.13-2-1-1.37-1.52-3.33-1.52-5.9v-9.2c0-2.52.52-4.43 1.56-5.73 1.04-1.3 2.74-1.95 5.1-1.95 2.36 0 4.05.66 5.07 1.98 1.05 1.3 1.57 3.2 1.57 5.7v9.24c0 2.5-.52 4.45-1.56 5.8-1.03 1.37-2.72 2.05-5.06 2.05zm0-2.67c1.26 0 2.1-.37 2.55-1.1.43-.75.65-1.87.65-3.37V35.77c0-1.48-.22-2.57-.66-3.27-.45-.73-1.3-1.1-2.56-1.1-1.28 0-2.14.37-2.58 1.1-.44.7-.66 1.78-.66 3.26V46.4c0 1.5.22 2.63.66 3.37.44.74 1.3 1.1 2.58 1.1z"
            />
            <path
                fill="#F8C45E"
                d="M23.37 36.37l20.17-4.2c.55-.12 1.04.26 1.14.77.93 6.8-4.74 7.98-9.63 9-4.85 1-10.55 1.8-12.43-4.4-.14-.5.2-1.05.75-1.17z"
            />
            <path
                fill="#333"
                d="M35.22 42.52c-4.14.86-11.03 2.3-13.14-4.78-.13-.42-.03-.83.16-1.18.24-.36.6-.6 1.03-.7l20.24-4.22c.44-.1.87 0 1.23.23.36.24.58.63.6 1.02.96 7.32-5.16 8.6-10.1 9.62zM23.5 36.96c-.13.03-.2.13-.24.18-.03.05-.06.14-.03.27 1.66 5.6 6.7 5.03 11.75 3.98 4.9-1.02 10.04-2.1 9.18-8.33-.02-.13-.08-.2-.13-.24-.06-.02-.16-.1-.3-.06L23.5 36.96z"
            />
            <path
                fill="#F8C45E"
                d="M42.3 29.96l-18.7 3.9c-1.28.27-2.4-.96-1.93-2.2 1.5-3.96 5-7.1 9.56-8.06 4.55-.95 8.98.55 11.98 3.57.93.96.4 2.52-.9 2.8z"
            />
            <path
                fill="#333"
                d="M42.44 30.55l-18.7 3.9c-.83.17-1.65-.1-2.18-.74-.54-.62-.7-1.47-.38-2.24 1.64-4.35 5.38-7.5 9.97-8.46 4.6-.95 9.27.45 12.52 3.77.56.6.78 1.42.55 2.22-.33.8-.97 1.38-1.78 1.55zm-11.1-6.4c-4.2.88-7.6 3.74-9.1 7.7-.14.38-.06.76.18 1.07.24.3.67.43 1.06.35l18.7-3.9c.4-.08.74-.37.84-.75.1-.37 0-.8-.26-1.04-2.95-3-7.2-4.3-11.42-3.43z"
            />
            <path
                fill="#fff"
                d="M24.5 30.15c-.14.03-.23 0-.34-.06-.2-.14-.26-.4-.12-.6 1.4-2.23 3.5-3.9 5.93-4.84.2-.1.5.02.6.23.07.2-.05.48-.25.56-2.28.87-4.2 2.46-5.5 4.5-.08.1-.2.17-.33.2z"
            />
            <path
                fill="#F8C45E"
                d="M44.15 31.7L22.6 36.17c-.63.13-1.27-.35-1.23-1.02 0-.48.35-.9.82-1l21.5-4.5c.67-.13 1.28.4 1.24 1.07 0 .48-.36.87-.8.96z"
            />
            <path
                fill="#333"
                d="M44.27 32.23l-21.55 4.5c-.47.1-.98-.02-1.36-.34-.38-.32-.6-.76-.58-1.25.03-.75.56-1.4 1.3-1.55l21.5-4.48c.5-.1.98.02 1.36.33.38.32.57.8.58 1.3-.02.74-.52 1.33-1.25 1.48zm-21.96 2.5c-.2.06-.35.22-.35.44 0 .18.1.3.17.36.05.03.2.13.37.1L44 31.15c.2-.05.35-.2.35-.43.02-.14-.05-.25-.16-.36-.12-.1-.26-.13-.4-.1l-21.5 4.48z"
            />
            <path
                fill="#F6C114"
                d="M21.66 36.77c.03.17.18.23.32.24 1.75-.18 2.18 1.45 4.02 1.06 1.98-.4 1.6-2.26 3.52-2.66 1.98-.42 2.36 1.44 4.34 1.03 1.97-.4 1.58-2.27 3.56-2.68 1.97-.4 2.36 1.44 4.33 1.03 1.9-.4 1.62-2.1 3.27-2.57.13-.02.23-.17.2-.34-.04-.17-.2-.27-.36-.23L21.9 36.4c-.17.05-.28.2-.24.37z"
            />
            <path
                fill="#333"
                d="M41.87 35.33c-1.2.25-1.97-.2-2.6-.6-.55-.33-.97-.6-1.74-.43-.77.16-1.04.57-1.4 1.08-.4.57-.92 1.34-2.12 1.6-1.2.24-1.96-.22-2.58-.62-.56-.32-.97-.6-1.7-.43-.73.15-1.04.57-1.4 1.08-.4.58-.92 1.34-2.12 1.6-1.2.24-1.97-.2-2.6-.6-.5-.3-.86-.57-1.52-.48-.44.04-.86-.26-.95-.68-.1-.47.22-.93.7-1.03l23-4.78c.46-.1.93.2 1.02.66.1.43-.17.88-.6 1-.6.18-.86.58-1.2 1.05-.46.63-.98 1.35-2.18 1.6zm-2.65-1.96c.25.13.5.25.7.38.57.33.98.6 1.75.43.77-.16 1.05-.57 1.43-1.1.14-.2.27-.4.5-.62l-4.38.9zM31.37 35c.25.13.5.26.7.4.56.3.98.58 1.7.43.78-.16 1.05-.57 1.44-1.1.14-.2.32-.4.5-.62l-4.33.9zm-7.86 1.65c.26.12.5.25.72.38.56.32.97.6 1.7.44.78-.17 1.05-.57 1.4-1.1.13-.2.3-.4.48-.62l-4.3.9zM28.7 29.72c-.1.23-.4.4-.66.27-.25-.1-.4-.42-.27-.66.08-.24.67-1.07.9-.98.3.1.15 1.1.03 1.36zM25.64 30.97c-.12.25-.42.35-.67.23-.25-.13-.35-.4-.22-.66.13-.25.78-1 1.02-.87.3.07 0 1.05-.13 1.3zM32.7 29.76c.04.26-.17.52-.43.57-.25.06-.52-.15-.57-.4-.06-.26.04-1.3.3-1.3.3-.06.64.88.7 1.13zM31.53 26.75c-.08.28-.32.42-.6.4-.28-.08-.42-.32-.38-.6.07-.27.47-1.15.75-1.1.28.06.3 1.02.23 1.3zM35.78 25.25c.22.17.23.48.05.7-.17.2-.48.22-.7.05-.22-.18-.83-.97-.65-1.18.2-.18 1.08.25 1.3.43zM36.6 29.25c.15.24.03.53-.2.67-.25.13-.54.02-.68-.22-.14-.23-.38-1.2-.14-1.33.25-.1.9.65 1.03.88zM39.52 26.85c.2.17.23.47.05.7-.18.2-.5.22-.7.05-.22-.18-.8-.98-.6-1.2.17-.2 1.07.26 1.25.45z"
            />
            <path
                fill="#fff"
                d="M24.07 31.16c.05.2-.1.42-.3.46-.22.05-.43-.08-.47-.3-.04-.2.08-.45.3-.5.2-.04.43.13.47.34zM30.9 33.6l-8.3 1.74c-.16.03-.3-.06-.35-.23-.03-.16.07-.32.24-.35l8.27-1.73c.17-.03.33.07.37.24.03.16-.12.33-.24.35zM33.86 33l-1.9.4c-.16.03-.32-.07-.35-.24-.03-.17.07-.32.25-.36l1.88-.4c.18-.03.33.07.37.24.03.17-.07.32-.24.36zM13.8 27.9s-3.57-9.42-6.5-12.6c-.06-.03-.07-.07-.12-.1-2.17-2.23-5.83.38-4.37 3.1l11.85 22.66-.84-13.07z"
            />
            <path
                fill="#333"
                d="M15.92 45.3L2 18.75c-.83-1.63-.37-3.53 1.15-4.6 1.53-1.06 3.48-.9 4.75.42l.1.1c3.02 3.3 6.55 12.5 6.68 12.92l.03.12.04.13 1.18 17.48zm-11-29.98c-.26.05-.5.15-.74.33-.58.43-1.08 1.23-.56 2.23l9.8 18.7-.56-8.5c-.4-1.1-3.65-9.35-6.3-12.14l-.05-.08c-.5-.55-1.07-.65-1.58-.54z"
            />
            <path
                fill="#fff"
                d="M14.2 26.27S12.2 16.4 9.84 12.8c0-.05-.06-.08-.06-.13-1.75-2.54-5.82-.55-4.85 2.38l7.97 24.25 1.27-13.03z"
            />
            <path
                fill="#333"
                d="M13.37 43.82l-9.35-28.5c-.58-1.72.2-3.55 1.92-4.35 1.66-.83 3.55-.35 4.6 1.2l.06.1C13.03 16 15 25.68 15.1 26.1v.25l-1.73 17.47zM7.2 12.47c-.18.03-.34.1-.47.14-.65.32-1.3 1.07-.95 2.14l6.6 20.05.83-8.5c-.24-1.18-2.08-9.8-4.2-13.03l-.05-.07c-.45-.7-1.16-.86-1.76-.73z"
            />
            <path
                fill="#fff"
                d="M15.6 24.22s.3-10.1-1.2-14.1c0-.03 0-.08-.02-.12-1.14-2.88-5.53-1.8-5.25 1.27l2.3 25.43 4.16-12.48z"
            />
            <path
                fill="#333"
                d="M11.62 37.6c-.04 0-.1 0-.1 0-.5.07-.95-.32-1-.84L8.2 11.33C8.04 9.53 9.2 7.9 11 7.5c.06-.02.1-.03.14-.04 1.76-.37 3.47.5 4.13 2.18l.06.1c1.54 4.18 1.26 14.05 1.27 14.5-.03.52-.44.9-.98.9-.5-.04-.94-.43-.9-.96 0-.1.24-9.95-1.18-13.75l-.02-.08c-.4-1.02-1.37-1.2-2.04-1.03-.68.15-1.5.76-1.4 1.88l2.3 25.43c0 .44-.3.86-.78.96z"
            />
            <path
                fill="#fff"
                d="M14.5 25.46c1.7-2.2 3.97-4 6.75-5.06.82-.34 1.83-.64 1.83-.64 3.73-1.22 5.55.38 5.55.38.17.18.88.8 1 1.8 0 .23.08 1.05-.46 1.7-.53.63-1.35.8-1.78.9-2.55.48-4.72 1.24-5.38 1.5-2.07.84-3.26 2.4-3.65 2.88-1.83 2.4-2.22 5.7-1.5 8.45 1.5 5.8 7.65 9.05 13.4 7.2 1.22-.4 2.3-.97 3.23-1.7 1.16-.9 2.87-.63 3.7.56.77 1.1.54 2.6-.54 3.45-1.15.9-2.43 1.65-3.84 2.2-8.85 3.5-20.1.86-22.43-8.16-.55-2.17-.67-6.8 1.16-8.78l2.95-6.68z"
            />
            <path
                fill="#333"
                d="M29.55 51c-4.55.95-9.3.5-13.05-1.37-3.6-1.84-6.05-4.76-7-8.48-.5-2-.88-7.2 1.4-9.62.36-.38.94-.4 1.33-.05.38.36.4.92.05 1.3-1.47 1.55-1.52 5.64-.96 7.9.85 3.2 2.94 5.73 6.1 7.3 4.3 2.15 10.08 2.22 15.1.25 1.28-.48 2.52-1.18 3.6-2.07.68-.54.84-1.5.33-2.22-.26-.4-.66-.6-1.13-.7-.46-.07-.88.06-1.23.3-1.05.84-2.27 1.45-3.53 1.84-2.97.97-6.3.7-9.03-.8-2.77-1.5-4.78-4.02-5.55-7.07-.87-3.24-.22-6.8 1.65-9.22.42-.57 1.76-2.3 4.08-3.18.83-.35 3.05-1.08 5.55-1.55.38-.08.9-.2 1.22-.57.28-.36.27-.85.24-1-.07-.57-.4-1-.7-1.23-.06-.04-1.5-1.2-4.65-.18 0 0-.98.3-1.8.64-2.48 1-4.7 2.66-6.3 4.76-.33.4-.9.5-1.32.18-.42-.3-.5-.86-.18-1.28 1.83-2.4 4.3-4.24 7.13-5.36.86-.35 1.83-.64 1.87-.65 4.2-1.36 6.37.47 6.43.55.76.63 1.2 1.5 1.3 2.4.05.4.1 1.45-.62 2.34-.74.9-1.77 1.12-2.3 1.23-2.44.47-4.57 1.22-5.2 1.48-1.8.73-2.9 2.14-3.25 2.6-1.55 2-2.06 4.97-1.36 7.7.66 2.53 2.3 4.65 4.67 5.87 2.32 1.28 5 1.5 7.57.67 1.1-.37 2.06-.88 2.95-1.55.76-.6 1.7-.84 2.67-.7.97.16 1.84.68 2.36 1.45 1.07 1.5.74 3.6-.72 4.73-1.22.96-2.63 1.74-4.07 2.34-1.25.44-2.43.78-3.68 1.04z"
            />
            <path
                fill="#fff"
                d="M26 49.9c.27 1.04 1.74 5.3 1.74 5.3l-8.65 2.96-8.42-16.3s4.15.38 5.67 1.47C17.88 44.43 26 49.9 26 49.9z"
            />
            <path
                fill="#333"
                d="M18.6 59.3l-8.73-17c-.22-.43-.03-1 .42-1.22.43-.23 1-.04 1.23.4l8 15.57 7.02-2.38c-.45-1.32-1.27-3.74-1.48-4.53-.1-.5.2-1 .67-1.1.5-.12 1.02.17 1.12.64.2.8 1.23 3.8 1.7 5.23l.33.86-10.3 3.55zM18.24 65.2l15.14-4.9-2-6.1-15.14 4.9 2 6.1zM17.62 66.38l-2.58-7.86 16.9-5.46 2.6 7.86-16.92 5.46zm-.2-6.7l1.46 4.37 13.34-4.32-1.45-4.36-13.34 4.32z"
            />
            <path
                fill="#fff"
                d="M19.92 61.28c.14.46.7.74 1.14.56.47-.14.75-.7.57-1.13-.14-.45-.7-.73-1.14-.55-.48.14-.77.7-.58 1.13zM21.13 62.8c-.9.18-1.86-.32-2.14-1.23-.34-.95.2-1.98 1.16-2.32.47-.14.97-.1 1.4.1.46.22.76.6.95 1.04.15.45.1.94-.1 1.38-.23.44-.6.74-1.07.92-.07.06-.12.07-.2.1zm-.38-1.82l-.88.3.88-.3c.05.03.04 0 0 0z"
            />
            <path
                fill="#333"
                d="M37.54 19.73c-.34.08-.7-.16-.77-.5l-1-4.72c-.06-.32.18-.68.52-.75.34-.07.7.16.77.5l.98 4.72c.07.34-.12.68-.5.76zM41.84 20.6c-.3-.2-.43-.57-.24-.92l2.44-4.2c.2-.3.58-.43.94-.24.3.2.43.57.23.92l-2.42 4.2c-.2.3-.63.44-.94.24zM45.5 23.62c-.1-.33.13-.73.47-.85l4.67-1.4c.34-.12.74.1.85.43.1.33-.12.73-.46.84l-4.67 1.4c-.38.14-.73-.05-.86-.42z"
            />
        </svg>
    );
};

export default Logo;
