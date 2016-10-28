using System;
using System.ComponentModel.DataAnnotations;

namespace PB.Books.Domain.Entities
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Type { get; set; }
        public DateTime DatePublished { get; set; }
        public decimal Price { get; set; }
    }
}