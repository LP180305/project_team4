import './loading.css'


    const Loading = () => {
        return(
            <div className='loadering'>
                <div class="loader">
                    <svg width="200" height="200">
                        <circle
                        class="traco"
                        cx="100"
                        cy="100"
                        r="70"
                        fill="transparent"
                        stroke="#ffe71c"
                        stroke-width="9"
                        stroke-dasharray="35 20"
                        transform="rotate(31 100 100)"
                        ></circle>
                    </svg>
                   
                    <div class="p1"></div>
                    <div class="p2"></div>
                    <div class="p3"></div>
                    <div class="p4"></div>
                    <div class="p5"></div>
                    <div class="p6"></div>
                    <div class="p7"></div>
                    <div class="p8"></div>
                    <div class="circle">
                        <div class="content">
                        <div class="eyes">
                            <div class="eye-left"></div>
                            <div class="eye-right"></div>
                        </div>
                        <div class="nouse"></div>
                        <div class="mouth"></div>
                        <div class="teeth">
                            <div class="tooth"></div>
                            <div class="tooth"></div>
                            <div class="tooth"></div>
                            <div class="tooth"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Loading;