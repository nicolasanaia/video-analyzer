import { LANGUAGES } from "./languages";

export const YOUTUBE_BASE_URL = 'https://www.youtube.com/watch?v=';

export const CHAT_GPT_MODEL = 'gpt-3.5-turbo';
export const CHAT_GPT_ROLE = 'user'; 
export const CHAT_GPT_PROMPT = async (language: string, transcription: string) => {
  return `Summarize the following text in detailed topics in Markdown format in the language ${ language ? LANGUAGES[language] : LANGUAGES.en }.
        Create a main title that reflects the text's context and include relevant subheadings. Highlight key points and themes clearly, using bullet points or numbered lists.
        Maintain a neutral tone and avoiding a narrative style:\n\n
        ${transcription}`;
}