﻿
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MeuProEventos.API.Data;
using MeuProEventos.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MeuProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly DataContext context;
        public EventoController(DataContext context)
        {
            this.context = context;

        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return this.context.Eventos;
        }
        [HttpGet("{id}")]

        public Evento GetById(int id)
        {
            return this.context.Eventos.FirstOrDefault(
                evento => evento.EventoId == id);
        }

        [HttpPost]
        public string Post()
        {
            return $"Exemplo de Post";
        }
        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Exemplo de Put: {id}";
        }
        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Exemplo de Delete: {id}";
        }
    }
}
