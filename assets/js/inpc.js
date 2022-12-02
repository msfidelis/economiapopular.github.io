const inpc_variacao = document.getElementById("inpc-variacao");

// INPC - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/inpc/inpc.json",
  function (data, textStatus, jqXHR) {
    const dataset = [];

    var raw = JSON.parse(data);

    raw.data.forEach((element) => {
      console.log(element);
      temp = {
        x: element.mes_ano,
        y: element.variacao_mes,
      };
      dataset.push(temp);
    });

    new Chart(inpc_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% em relação ao mês anterior",
            data: dataset,
            borderWidth: 1,
            color: "#FFFFFF"
          },
        ],
      },
      options: {
        responsive: true,
        scales: {},
        layouts: {},
        plugins: {
          title: {
            display: true,
            text: "Variação do INPC %",
            color: "#FFFFFF",
            padding: {
              top: 10,
              bottom: 30,
            },
          },
          subtitle: {
            display: true,
            color: "#FFFFFF",
            text: raw.unidade_medida,
          },
        },
      },
    });

    // Fonte do inpc
    $("div.fonte-inpc").text(raw.fonte);
    $("div.atualizacao-inpc").text(raw.data_atualizacao);
  }
);