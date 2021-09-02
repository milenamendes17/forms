<meta charset="utf-8">

<input/>
<button>compare com o meu segredo</button> 

<script type="text/javascript">
	var segredos = [2,4,5,7,9];
	var input = document.querySelector("input");
	input.focus();
	function verifica(){
		var achou = false;
		for (var posicao = 0; posicao < segredos.length; posicao++){
			if (input.value ==segredos[posicao]) {
					alert("você acertou!");
					achou = true;
					break;
			}

		}
		if (achou == false) {
			alert("você ERROU.....")
		}
		input.value = "";
		input.focus();
		2
	}

	var button = document.querySelector("button");
	button.onclick = verifica;

	
</script>