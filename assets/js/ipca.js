const ipca_variacao = document.getElementById("ipca-variacao");

// IPCA - Variação
$.get(
  "https://raw.githubusercontent.com/msfidelis/indices-economicos/main/data/ipca/ipca.json",
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

    new Chart(ipca_variacao, {
      type: "line",
      data: {
        backgroundColor: "#FFFFFF",
        datasets: [
          {
            label: "% em relação ao mês anterior",
            data: dataset,
            borderWidth: 1,
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
            text: "Variação do IPCA",
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

    // Fonte do IPCA
    $("div.fonte-ipca").text(raw.fonte);
    $("div.atualizacao-ipca").text(raw.data_atualizacao);
  }
);
