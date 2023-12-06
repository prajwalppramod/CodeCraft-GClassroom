import React from 'react'

const Whatis = () => {
    return (
        <div>
            <section class="text-white body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-5xl font-medium title-font mb-4 text-white">What is <span className='text-yellow-500'>Classroom GPT</span></h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-xl">ClassroomGPT is a groundbreaking project that seamlessly integrates with Google Classroom, introducing the power of AI for personalized and context-aware learning. Our plugin leverages the Google Classroom API to extract text data from classroom files, creating a dedicated dataset. Users can then interact with an AI model through the plugin, obtaining tailored insights directly related to their coursework. In the event of unanswered queries, the plugin offers the option to expand the search to OpenAI's dataset, ensuring a comprehensive and adaptive learning experience. ClassroomGPT revolutionizes education tech, enhancing the way users engage with and extract value from their educational materials.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Whatis