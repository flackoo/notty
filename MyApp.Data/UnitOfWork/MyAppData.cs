using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using MyApp.Data.Repositories;
using MyApp.Data.UnitOfWork;
using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace MyApp.Data.UnitOfWork
{
	public class MyAppData : IMyAppData
	{
		private readonly DbContext dbContext;

		private readonly IDictionary<Type, object> repositories;

		private IUserStore<User> userStore;

		public MyAppData() : this(new MyAppDbContext())
		{
		}

		public MyAppData(DbContext dbContext)
		{
			this.dbContext = dbContext;
			this.repositories = new Dictionary<Type, object>();
		}

		public IRepository<User> Users
		{
			get { return this.GetRepository<User>(); }
		}

		public IRepository<Note> Notes
		{
			get { return this.GetRepository<Note>(); }
		}

		public IUserStore<User> UserStore
		{
			get
			{
				if (this.userStore == null)
				{
					this.userStore = new UserStore<User>(this.dbContext);
				}

				return this.userStore;
			}
		}

		public void SaveChanges()
		{
			this.dbContext.SaveChanges();
		}

		private IRepository<T> GetRepository<T>() where T : class
		{
			if (!this.repositories.ContainsKey(typeof(T)))
			{
				var type = typeof(GenericEfRepository<T>);
				this.repositories.Add(
						typeof(T),
						Activator.CreateInstance(type, this.dbContext));
			}

			return (IRepository<T>)this.repositories[typeof(T)];
		}
	}
}