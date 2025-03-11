        let submit = document.getElementById("submit");
        let msg_field = document.getElementById("msg");
        let input_box = document.getElementById("text");
        delay = (time) => {
            return new Promise(res => setTimeout(res ,time))
        }
        async function start(){
            let content = document.getElementById("text");
            let node = document.createElement("div");
            let node_ds = document.createElement("div");
            let text = content.value.trim();
            if(text != ""){

                node.textContent = `${text}`;
                node.className = `message-you`;
                msg_field.appendChild(node);

                content.setAttribute("disabled", "");
                submit.setAttribute("disabled", "");

                node_ds.textContent = `处理中，请稍后...`;
                node_ds.className = `message-other`;
                await delay(1000);
                msg_field.appendChild(node_ds);

                await delay(5000);

                node_ds.textContent = `伺服器繁忙，请稍后再试。`;
                node_ds.style = 'background-color: red; color: white;';
            }
            content.value = "";
            content.removeAttribute("disabled");
            submit.removeAttribute("disabled");   
        }
        submit.addEventListener("click", start)
        input_box.addEventListener("keydown", function(){
            if(event.keyCode == 13){
                start();
            }
        })