using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using a_crud_api.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace a_crud_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrudController : ControllerBase
    {
        private readonly DataContext _context;

        public CrudController(DataContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Crud>>> GetCrud()
        {
            return Ok(await _context.Cruds.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Crud>>> CreateCrud(Crud crud)
        {
            _context.Cruds.Add(crud);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cruds.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Crud>>> UpdateCrud(Crud crud)
        {
            var dbCrud = await _context.Cruds.FindAsync(crud.Id);
            if (dbCrud == null)
                return BadRequest("Not Found :(");

            dbCrud.Name = crud.Name;
            dbCrud.FirstName = crud.FirstName;
            dbCrud.LastName = crud.LastName;
            dbCrud.Place = crud.Place;

            await _context.SaveChangesAsync();

            return Ok(await _context.Cruds.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Crud>>> DeleteCrud(int id)
        {
            var dbCrud = await _context.Cruds.FindAsync(id);
            if (dbCrud == null)
                return BadRequest("Not Found :(");

            _context.Cruds.Remove(dbCrud);
            await _context.SaveChangesAsync();

            return Ok(await _context.Cruds.ToListAsync());
        }
    }
}
